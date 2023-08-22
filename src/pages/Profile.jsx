import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { TabList, TabPanel, Tab, Tabs, TabPanels, ListItem, ListIcon, List } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt='40px' p='20px' colorScheme="green" variant='enclosed'>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'green.400'}}>Account Info</Tab>
        <Tab _selected={{color: 'white', bg: 'green.400'}}>Task History</Tab>
      </TabList>
    
    <TabPanels>
      <TabPanel>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={EmailIcon}/>
            Email: mario@gmail.com
          </ListItem>
          <ListItem>
            <ListIcon as={ChatIcon}/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon}/>
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
    </TabPanels>
    </Tabs>
  )
}
