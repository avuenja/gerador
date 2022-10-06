import { Button, HStack, Stack } from '@chakra-ui/react'

import { CreditCardBrand } from '@/enums'

interface CardBrandsButtonProps {
  brandType: CreditCardBrand
  onGenerate: (brand: CreditCardBrand) => void
}

const CardBrandsButton = ({ brandType, onGenerate }: CardBrandsButtonProps) => {
  const brands = [
    {
      name: 'American Express',
      type: CreditCardBrand.AMEX,
    },
    {
      name: 'Mastercard',
      type: CreditCardBrand.MASTERCARD,
    },
    {
      name: 'Visa',
      type: CreditCardBrand.VISA,
    },
  ]

  return (
    <Stack direction={{ base: 'column', sm: 'row' }}>
      {brands.map((brand) => (
        <Button
          key={brand.name}
          isActive={brandType === brand.type}
          onClick={() => onGenerate(brand.type)}
        >
          {brand.name}
        </Button>
      ))}
    </Stack>
  )
}

export default CardBrandsButton
