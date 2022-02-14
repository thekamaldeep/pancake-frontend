import React from 'react'
import { Flex, IconButton, CogIcon, useModal, Text } from '@pancakeswap/uikit'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
}

const GlobalSettings = ({ color, mr = '8px' }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr={mr} id="open-settings-dialog-button">
        <CogIcon height={24} width={24} color={color || 'textSubtle'} />
      </IconButton>
      <div className="site-logo">
        <Text color="turquoise">SpacePies</Text>
      </div>
    </Flex>
  )
}

export default GlobalSettings
