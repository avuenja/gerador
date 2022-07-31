import { Icon } from '@chakra-ui/react'
import type { IconProps as PhosphorIconProps } from 'phosphor-react'

interface AppIconProps {
  icon: React.ForwardRefExoticComponent<
    PhosphorIconProps & React.RefAttributes<SVGSVGElement>
  >
}

const AppIcon = ({ icon }: AppIconProps) => {
  return <Icon as={icon} width="6" height="6" />
}

export default AppIcon
