import React from 'react'
import { Dropdown, DropdownItem, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar bpaced="right" src="https://media-exp3.licdn.com/dms/image/C5603AQEsm4qE-uoT_A/profile-displayphoto-shrink_800_800/0/1613511074000?e=1628726400&v=beta&t=quZk0isU7CrKUCIjKyE_pzH4YYXH4xRA-OdHCxJpJtk">
                </Image>
                <Dropdown pointing="top-left" text="Hakan">
                    <Dropdown.Menu>
                        <DropdownItem text="Bilgilerim" icon="info"/>
                        <DropdownItem  text="Çıkış Yap" icon="sign-out" onClick={signOut}/>
                        
                    </Dropdown.Menu>
                </Dropdown>
                
            </Menu.Item>
        </div>
    )
}
