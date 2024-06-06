import {Component} from 'react'
import {
  GradientGeneratorComponent,
  ResponsiveContainer,
  MainHeading,
  TitleHeading,
  UnorderedButtonContainer,
  CustomLabel,
  CustomInput,
  InputContainer,
  ColorPickerContainer,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onClickGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      gradientValue,
      fromColorInput,
      toColorInput,
    } = this.state
    return (
      <GradientGeneratorComponent
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <TitleHeading>Choose Direction</TitleHeading>
          <UnorderedButtonContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                buttonDetails={eachDirection}
                key={eachDirection.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </UnorderedButtonContainer>
          <TitleHeading>Pick the Colors</TitleHeading>
          <InputContainer>
            <ColorPickerContainer>
              <CustomLabel htmlFor="firstColor">{fromColorInput}</CustomLabel>
              <CustomInput
                type="color"
                id="firstColor"
                name="firstColor"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </ColorPickerContainer>
            <ColorPickerContainer>
              <CustomLabel htmlFor="secondColor">{toColorInput}</CustomLabel>
              <CustomInput
                type="color"
                id="secondColor"
                name="secondColor"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </ColorPickerContainer>
          </InputContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorComponent>
    )
  }
}

export default GradientGenerator
