// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160dvh;
  width: 160vw;
  font-family: 'Roboto';
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 100vw;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    min-width: 1110px;
  }
`

export const MainHeading = styled.h1`
  color: #ededed;
`

export const TitleHeading = styled.p`
  font-size: 20px;
  color: #ffffff79;
`
export const UnorderedButtonContainer = styled.ul`
  display: flex;
  //   flex-direction: row;
  flex: wrap;
  justify-content: center;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 260px;
  margin: 20px;
`
export const ColorPickerContainer = styled.div``

export const CustomLabel = styled.p`
  display: block;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const CustomInput = styled.input`
  display: block;
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0px;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  margin: 20px;
  padding: 10px;
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  width: 140px;
  font-size: 16px;
  font-weight: 600;
`
