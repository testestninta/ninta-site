class Permissions {
  constructor(permissions) {
    this.bitfield =
      typeof permissions === 'number' ? permissions : this.resolve(permissions);
  }

  has(permission, checkAdmin = true) {
    if (permission instanceof Array)
      return permission.every(p => this.has(p, checkAdmin));
    permission = this.resolve(permission);
    if (
      checkAdmin &&
      (this.bitfield & this.constructor.FLAGS.ADMINISTRATOR) > 0
    )
      return true;
    return (this.bitfield & permission) === permission;
  }

  hasPermission(permission, explicit = false) {
    return this.has(permission, !explicit);
  }

  serialize(checkAdmin = true) {
    const serialized = {};
    for (const perm of Object.keys(this.constructor.FLAGS))
      serialized[perm] = this.has(perm, checkAdmin);
    return serialized;
  }

  resolve(permission) {
    if (permission instanceof Array)
      return permission
        .map(p => this.resolve(p))
        .reduce((prev, p) => prev | p, 0);
    if (permission instanceof Permissions) return permission.bitfield;
    if (typeof permission === 'string')
      permission = this.constructor.FLAGS[permission];
    if (typeof permission !== 'number' || permission < 0)
      throw new RangeError('Not Permission!');
    return permission;
  }
}

Permissions.FLAGS = {
  CREATE_INSTANT_INVITE: 1 << 0,
  KICK_MEMBERS: 1 << 1,
  BAN_MEMBERS: 1 << 2,
  ADMINISTRATOR: 1 << 3,
  MANAGE_CHANNELS: 1 << 4,
  MANAGE_GUILD: 1 << 5,
  ADD_REACTIONS: 1 << 6,
  VIEW_AUDIT_LOG: 1 << 7,
  PRIORITY_SPEAKER: 1 << 8,
  STREAM: 1 << 9,

  VIEW_CHANNEL: 1 << 10,
  READ_MESSAGES: 1 << 10,
  SEND_MESSAGES: 1 << 11,
  SEND_TTS_MESSAGES: 1 << 12,
  MANAGE_MESSAGES: 1 << 13,
  EMBED_LINKS: 1 << 14,
  ATTACH_FILES: 1 << 15,
  READ_MESSAGE_HISTORY: 1 << 16,
  MENTION_EVERYONE: 1 << 17,
  EXTERNAL_EMOJIS: 1 << 18,
  USE_EXTERNAL_EMOJIS: 1 << 18,

  CONNECT: 1 << 20,
  SPEAK: 1 << 21,
  MUTE_MEMBERS: 1 << 22,
  DEAFEN_MEMBERS: 1 << 23,
  MOVE_MEMBERS: 1 << 24,
  USE_VAD: 1 << 25,

  CHANGE_NICKNAME: 1 << 26,
  MANAGE_NICKNAMES: 1 << 27,
  MANAGE_ROLES: 1 << 28,
  MANAGE_ROLES_OR_PERMISSIONS: 1 << 28,
  MANAGE_WEBHOOKS: 1 << 29,
  MANAGE_EMOJIS: 1 << 30
};

Permissions.ALL = Object.keys(Permissions.FLAGS).reduce(
  (all, p) => all | Permissions.FLAGS[p],
  0
);

export default Permissions;
