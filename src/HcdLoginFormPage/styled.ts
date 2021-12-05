import styled, { css } from "styled-components";
import { BLACK, BLUE, WHITE } from "theme/colors";
import { SCREEN_MD } from "theme/screens";
import { FONT_MEDIUM } from "theme/text";

export const Left = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${WHITE};
    .login-form {
        width: 100%;
    }
`;

export const Right = styled.div<{
    role: 'member' | 'partner'
}>`
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => {
        switch (props.role) {
            case 'member':
                return BLUE;
            case 'partner':
                return css`linear-gradient(0deg,rgba(58,58,58,1) 10%,rgba(0,0,0,1) 100%)`;
            default:
                return BLUE;
        }}
    };
`;

export const Name = styled.div`
    font-size: ${FONT_MEDIUM};
    color: ${WHITE};
`;

export const NameWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 236px;
    margin-top: 17px;
    padding-top: 17px;
    border-top: 1px solid rgb(255 255 255 / 0.2);
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;

    img {
        width: 238px;
        height: 38px;
    }
`;

export const Background = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 50vh;
    img {
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${SCREEN_MD}) {
        flex-direction: column-reverse;

        ${Logo} {
            padding-top: 60px;
        }

        ${Left} {
            width: 100%;
            height: auto;
            .login-form {
                width: unset;
            }
        }

        ${Right} {
            width: 100%;
            height: 381px;
        }
    }
`;
