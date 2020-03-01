import Permission from '../utils/Permission';

const ICON_URL = 'https://cdn.discordapp.com/icons';

class Guild {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;

    this.icon = config.icon;

    this.permissions = new Permission(config.permissions);
    this.hasPermission = this.permissions.serialize();
    this.features = config.features;
  }

  get guildIcon() {
    return this.icon
      ? `${ICON_URL}/${this.id}/${this.icon}.${
          this.features['ANIMATED_ICON'] ? 'gif' : 'jpg'
        }`
      : 'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png';
  }
}

export default Guild;
