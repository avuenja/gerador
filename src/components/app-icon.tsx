import { Icon, type IconProps } from '@chakra-ui/react'
import type { IconProps as PhosphorIconProps } from 'phosphor-react'

interface AppIconProps extends IconProps {
  icon: React.ForwardRefExoticComponent<
    PhosphorIconProps & React.RefAttributes<SVGSVGElement>
  >
}

const AppIcon = ({ icon, ...props }: AppIconProps) => {
  return <Icon as={icon} width="6" height="6" {...props} />
}

export default AppIcon
