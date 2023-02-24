import { memo, type FC } from 'react';
import { Flexbox } from 'react-layout-kit';

import LangSwitch from 'dumi-theme-antd-style/dist/slots/LangSwitch';
import Logo from 'dumi-theme-antd-style/dist/slots/Logo';
import Navbar from 'dumi-theme-antd-style/dist/slots/Navbar';
import SearchBar from 'dumi-theme-antd-style/dist/slots/SearchBar';
import More from './More'

import Burger from 'dumi-theme-antd-style/dist/components/Burger';
import GithubButton from 'dumi-theme-antd-style/dist/components/GithubButton';
import ThemeSwitch from 'dumi-theme-antd-style/dist/components/ThemeSwitch';

import { Grid } from 'antd';
import { useSiteStore } from 'dumi-theme-antd-style/dist/store/useSiteStore';
import { useStyle } from 'dumi-theme-antd-style/dist/slots/Header/style';

const { useBreakpoint } = Grid;
const Header: FC = () => {
  const hasHeader = useSiteStore((s) => !!s.routeMeta.frontmatter);

  const screens = useBreakpoint();
  const { styles } = useStyle();

  return !hasHeader ? null : (
    <div className={styles.header}>
      <Flexbox
        horizontal
        distribution={'space-between'}
        align={'center'}
        width={'auto'}
        className={styles.content}
      >
        {screens['xs'] ? (
          <>
            <Flexbox>
              <Burger />
            </Flexbox>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox>
              <More />
            </Flexbox>
            <Flexbox>
              <ThemeSwitch />
            </Flexbox>
          </>
        ) : (
          <>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox style={{ marginLeft: 48, alignSelf: 'end' }}>
              <Navbar />
            </Flexbox>
            <section className={styles.right}>
              <div />
              <Flexbox
                gap={16}
                horizontal
                align={'center'}
                className="dumi-default-header-right-aside"
              >
                <SearchBar />
                <More />
                <LangSwitch />
                <GithubButton />
                <ThemeSwitch />
              </Flexbox>
            </section>
          </>
        )}
      </Flexbox>
    </div>
  );
};

export default memo(Header);
