import {
  Divider,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  FormHelperText,
  InputLeftAddon,
  InputRightAddon
} from '@kai/components'
import {
  PaperAirplaneSolidIcon,
  MailSolidIcon,
  UserCircleIcon,
  LocationMarkerIcon
} from '@kai/icons'

export const Inputs = () => {
  return (
    <div>
      <div className="px-32 py-16 mx-auto max-w-7xl">
        <FormControl isRequired>
          <FormLabel>Hello</FormLabel>
          <Input placeholder="you@example.com" defaultValue="admin@iki.ai" />
        </FormControl>

        <div className="mt-4 flex -space-x-px">
          <div className="w-1/2 flex-1 min-w-0 mr-2">
            <Input placeholder="you@example.com" />
          </div>
          <div className="w-1/2 flex-1 min-w-0">
            <Input placeholder="you@example.com" isDisabled />
          </div>
        </div>

        <Button
          className="mt-4"
          icon={<PaperAirplaneSolidIcon className="text-primary-500 opacity-60" />}
          isWide
          floatIcon
        >
          Submit
        </Button>
      </div>

      <Divider className="font-medium" intent="light">
        ERRORS
      </Divider>

      <div className="px-32 py-16 mx-auto max-w-7xl">
        <FormControl isRequired isDisabled>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input name="email" type="email" placeholder="Email address" />
            <InputLeftElement>
              <MailSolidIcon />
            </InputLeftElement>
          </InputGroup>
          {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage>  */}
        </FormControl>

        <FormControl className="mt-8" isRequired>
          <FormLabel>Age</FormLabel>
          <InputGroup>
            <Input name="age" placeholder="Age" />
            <InputLeftElement>
              <UserCircleIcon />
            </InputLeftElement>
          </InputGroup>
          <FormHelperText>This is some help Text!</FormHelperText>
        </FormControl>

        <FormControl isInvalid className="mt-8">
          <FormLabel>First Name</FormLabel>
          <InputGroup>
            <Input name="firstName" placeholder="First Name" />
            <InputRightElement>
              <MailSolidIcon />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Small Password</FormErrorMessage>
        </FormControl>

        <FormControl className="mt-8">
          <FormLabel>Location</FormLabel>
          <InputGroup>
            <Input placeholder="Current location yo!" />
            <InputLeftAddon>http://</InputLeftAddon>
          </InputGroup>
        </FormControl>

        <FormControl className="mt-8">
          <FormLabel>City</FormLabel>
          <InputGroup inputSize="xl">
            <Input placeholder="Current city!" />
            <InputLeftAddon>
              <PaperAirplaneSolidIcon width="1.5rem" height="1.5rem" />
            </InputLeftAddon>
          </InputGroup>
        </FormControl>

        <FormControl className="mt-8">
          <FormLabel>City</FormLabel>
          <InputGroup>
            <Input placeholder="Current city!" />
            <InputRightAddon>http://</InputRightAddon>
          </InputGroup>
        </FormControl>
      </div>
    </div>
  )
}
