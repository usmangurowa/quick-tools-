import React from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, Stack } from '@mantine/core';

import {
  TablerIcon,
  IconHome2,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons';
import useStyles from './SideNav.styles';

export interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export type MockDataType = { icon: TablerIcon; label: string };

const mockdata: MockDataType[] = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUser, label: 'Account' },
  { icon: IconSettings, label: 'Settings' },
];

const SideNav = () => {
  const [active, setActive] = React.useState<number>(1);
  const { classes } = useStyles();
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));
  return (
    <>
      <Navbar height={'100vh'} width={{ base: 80 }} p="md">
        <Navbar.Section grow>
          <Stack justify="center" spacing={5}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default SideNav;

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0} withArrow>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};
