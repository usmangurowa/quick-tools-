import React from 'react';
import useStyles from './BottomNav.style';
import {
  Header,
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  Group,
  Box,
  Paper,
} from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons';
import { MockDataType, NavbarLinkProps } from '../SideNav/SideNav';

const mockdata: MockDataType[] = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUser, label: 'Account' },
  { icon: IconSettings, label: 'Settings' },
];

const BottomNav = () => {
  const [active, setActive] = React.useState<number>(1);
  const { classes } = useStyles();
  const items = mockdata.map((item: MockDataType, index: number) => (
    <Tab {...item} key={item.label} active={index === active} onClick={() => setActive(index)} />
  ));
  return (
    <Paper shadow="xs" className={classes.bottom}>
      <Group spacing={5} sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {items}
      </Group>
    </Paper>
  );
};

export default BottomNav;

const Tab = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0} withArrow>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size={40} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};
