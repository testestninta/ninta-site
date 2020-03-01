const popupOptions = {
  directories: 0,
  titlebar: 0,
  toolbar: 0,
  status: 0,
  menubar: 0,
  location: false,
  scrollbars: 'no',
  resizable: 'no',
  height: 570,
  width: 500
};

const scopes = ['identify', 'guilds'];

const DISCORD_ID = process.env.REACT_APP_DISCORD_ID;
const DISCORD_REDIRECT_URI = process.env.REACT_APP_DISCORD_REDIRECT_URI;

class DiscordWarapper {
  static loginPopup() {
    return window.open(
      this._buildOAuthURL(),
      '_blank',
      this._buildQuery(popupOptions, ',')
    );
  }

  static _buildOAuthURL() {
    return `https://discordapp.com/oauth2/authorize?${this._buildQuery({
      client_id: DISCORD_ID,
      redirect_uri: DISCORD_REDIRECT_URI,
      response_type: 'code',
      scope: scopes.join('%20')
    })}`;
  }

  static _buildQuery(obj, join = '&') {
    return obj
      ? Object.entries(obj)
          .map(a => a.join('='))
          .join(join)
      : '';
  }
}

export default DiscordWarapper;
