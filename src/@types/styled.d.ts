/**
 * code from https://styled-components.com/docs/api#create-a-declarations-file
 */

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
