import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { TableData } from '../TableData'
import { DetailsTable } from '../DetailsTable'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const MyTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Box fontSize="30rem">
        <Tabs
          sx={{ fontSize: '50rem' }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          centered
          color="dark"
        >
          <Tab
            sx={{ fontSize: '2rem' }}
            label="Posts Table (jsonplaceholder)"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: '2rem' }}
            label="Details TabLE"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <GridTable /> */}
        <DetailsTable />
      </TabPanel>
    </Box>
  )
}
