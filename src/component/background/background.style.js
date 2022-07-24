import styled from 'styled-components'

const positionMap = [
  { x: 0, y: -200, bgz: 350 },
  { x: -554, y: -117, bgz: 250 },
  { x: -1250, y: -117, bgz: 250 },
]

const getBGSize = ({ position = 0 }) => `${positionMap[position].bgz}%`

const getPosition = ({ position = 0 }) =>
  `${positionMap[position].x}px ${positionMap[position].y}px`

export const Background = styled.div`
  border: 1px solid red;
  transition: 250ms;
  background-image: url('/marian-the-teleporter.jpg');
  padding-top: 25%;
  background-size: ${getBGSize};
  background-repeat: no-repeat;
  background-position: ${getPosition};
`
