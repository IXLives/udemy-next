import {css} from '@emotion/react'
import {IoMdPlanet as Saturn} from 'react-icons/io'

const saturnStyles = css`
    position: relative;
    top: 0.2em;
`

const logoStyles = css`
    font-size:7rem;
    display: block;
    text-align:center;
    font-variant: small-caps;
`


const Logo = () => (
    <span css = {logoStyles}>
        Devl<Saturn css = {saturnStyles} />g
    </span>
)

export default Logo