import React, { Component } from 'react';

import Style from './styles';

class FooterComponent extends Component {
  render() {
    return (
      <Style className="footer">
        <div className="content-copyright">
          <p>
            Website created by{' '}
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AvengerSuicide"
              >
                AvengerSuicide
              </a>
            </span>
            .
          </p>
        </div>
      </Style>
    );
  }
}

export default FooterComponent;
