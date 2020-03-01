import Guild from './Guild';
import api from '../services/api';

import { store } from '../store';

const DefaultAvatars = {
  BLURPLE: '6debd47ed13483642cf09e832ed0bc1b',
  GREY: '322c936a8c8be1b803cd94861bdfa868',
  GREEN: 'dd4dbc0016779df1378e7812eabaa04d',
  ORANGE: '0e291f67c9274a1abdddeb3fd919cbaa',
  RED: '1cbd08c76f8af6dddce02c5138971129'
};

class User {
  constructor(config) {
    if (!(config instanceof Object)) throw new TypeError('Not Object!');

    this.user = null;
    this.guilds = [];

    Object.defineProperty(this, 'expiresIn', { value: config.expiresIn });
    Object.defineProperty(this, 'tokenType', { value: config.tokenType });
    Object.defineProperty(this, 'accessToken', { value: config.accessToken });
    Object.defineProperty(this, 'refreshToken', { value: config.refreshToken });
  }

  get displayAvatarURL() {
    return this.avatarURL || this.defaultAvatarURL;
  }

  get avatarURL() {
    const imageExt =
      this.user.avatar && this.user.avatar.startsWith('a_')
        ? '.gif'
        : '.png?size=256';
    return this.avatar
      ? `https://cdn.discordapp.com/avatars/${this.user.id}/${this.user.avatar}${imageExt}`
      : null;
  }

  get defaultAvatarURL() {
    const avatars = Object.keys(DefaultAvatars);
    const avatar = avatars[this.user.discriminator % avatars.length];
    return `https://discordapp.com/assets/${DefaultAvatars[avatar]}.png`;
  }

  get tag() {
    return `${this.user.username}#${this.user.discriminator}`;
  }

  async getUser() {
    const { user } = await this._request('/users/@me').then(
      response => response.data
    );
    if (user) {
      this.user = user;
    }
    return this;
  }

  async getGuilds() {
    const { guilds } = await this._request('/users/@me/guilds').then(
      response => response.data
    );
    if (guilds) {
      this.guilds = guilds.map(guild => new Guild(guild));
    }
    return this;
  }

  _request(endpoint) {
    return api.get(endpoint, {
      headers: {
        Authorization: store.getState().auth.token
      }
    });
  }
}

export default User;
