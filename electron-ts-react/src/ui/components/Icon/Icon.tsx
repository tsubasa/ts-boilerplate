import styled from 'styled-components';

const base = styled.i`
  font: normal normal normal 16px/1 codicon;
  display: inline-block;
  text-decoration: none;
  text-rendering: auto;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const createIcon = (content: string) => styled(base)`
  &::before {
    content: '${content}';
  }
`;

export type CreateIconType = ReturnType<typeof createIcon>;

// window
export const WindowCloseIcon = createIcon('\\eab8');

export const WindowMinimizeIcon = createIcon('\\eaba');

export const WindowMaximizeIcon = createIcon('\\eab9');

export const WindowRestoreIcon = createIcon('\\eabb');

// nav
export const DashboardIcon = createIcon('\\eb06');

export const TasksIcon = createIcon('\\eb6a');

export const AccountsIcon = createIcon('\\ea7e');

export const ProxiesIcon = createIcon('\\eb50');

export const ProfilesIcon = createIcon('\\eb54');

export const MonitorIcon = createIcon('\\eb58');

export const SettingsIcon = createIcon('\\eb51');

export const DebugIcon = createIcon('\\ead8');

// action
export const UserIcon = createIcon('\\eb99');

export const AddIcon = createIcon('\\eb95');

export const EditIcon = createIcon('\\eb65');

export const RemoveIcon = createIcon('\\ea81');

export const CloseIcon = createIcon('\\eab8');

export const PlayIcon = createIcon('\\eb2c');

export const StopIcon = createIcon('\\ead7');

export const BrowserIcon = createIcon('\\ebd5');

export const ClearIcon = createIcon('\\ebcf');

export const RefreshIcon = createIcon('\\eb37');

export const EyeIcon = createIcon('\\ea70');

export const EyeClosedIcon = createIcon('\\eae7');

export const ClockIcon = createIcon('\\eb7c');

export const DuplicateIcon = createIcon('\\ebcc');

export const CustomizeIcon = createIcon('\\eb52');

export const BellOnIcon = createIcon('\\eb9a');

export const BellOffIcon = createIcon('\\eaa2');

export const CircleIcon = createIcon('\\ea71');

export const MoreIcon = createIcon('\\eb10');
