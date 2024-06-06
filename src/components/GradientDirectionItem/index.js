// Write your code here
import {CustomButton, ListButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = buttonDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListButtonItem>
      <CustomButton
        type="button"
        onClick={onClickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </ListButtonItem>
  )
}

export default GradientDirectionItem
