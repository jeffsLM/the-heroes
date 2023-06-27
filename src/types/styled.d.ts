import 'styled-components';
import { ThemeContextType } from '@/types/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeContextType {}
}
