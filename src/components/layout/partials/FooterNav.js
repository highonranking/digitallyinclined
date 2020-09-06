import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://quiet-depths-98364.herokuapp.com/">Contact us</a>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <a href="mailto:digitallyinclinedofficial@gmail.com">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;