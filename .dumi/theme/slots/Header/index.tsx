import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouteMeta, useSiteData } from 'dumi';
import ColorSwitch from 'dumi/theme-default/slots/ColorSwitch';
import HeaderExtra from 'dumi/theme-default/slots/HeaderExtra';
import LangSwitch from 'dumi/theme-default/slots/LangSwitch';
import Logo from 'dumi/theme-default/slots/Logo';
import Navbar from 'dumi/theme-default/slots/Navbar';
import RtlSwitch from 'dumi/theme-default/slots/RtlSwitch';
import SearchBar from 'dumi/theme-default/slots/SearchBar';
import SocialIcon from 'dumi/theme-default/slots/SocialIcon';
import React, { useMemo, useState, type FC } from 'react';

import More from './More'

import 'dumi/theme-default/slots/Header/index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  const socialIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
          .slice(0, 5)
          .map((key) => ({
            icon: key,
            link: themeConfig?.socialLinks?.[key],
          }))
        : [],
    [themeConfig.socialLinks],
  );

  return (
    <div
      className="dumi-default-header"
      data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <div className="dumi-default-header-content">
        <section className="dumi-default-header-left">
          <Logo />
        </section>
        <section className="dumi-default-header-right">
          <Navbar />
          <div className="dumi-default-header-right-aside">
            <SearchBar />
            <LangSwitch />
            <RtlSwitch />
            {themeConfig.prefersColor.switch && <ColorSwitch />}
            <More />
            {socialIcons.map((item) => (
              <SocialIcon icon={item.icon} link={item.link} key={item.link} />
            ))}
            <HeaderExtra />
          </div>
        </section>
        <button
          type="button"
          className="dumi-default-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </div>
  );
};

export default Header;
