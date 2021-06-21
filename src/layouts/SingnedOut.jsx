import React from "react";
import { Button, MenuItem, Icon } from "semantic-ui-react";

export default function SingnedOut({signIn}) {
  return (
    <div>
      <MenuItem>
        <Button icon labelPosition="left" primary onClick={signIn}>
          <Icon name="sign in" />
          Giriş Yap
        </Button>

        <Button icon labelPosition="left" primary style={{marginLeft:"0.5em"}}>
        <Icon name="users" />
            Kayıt Ol
            </Button>
      </MenuItem>
    </div>
  );
}
