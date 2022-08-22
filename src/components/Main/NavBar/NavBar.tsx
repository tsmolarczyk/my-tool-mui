import * as React from 'react'
import Box from '@mui/material/Box'

import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between" padding="1rem">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" component="div" sx={{ alignSelf: 'center' }}>
            Customers
          </Typography>
          <Box></Box>
        </Box>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            MENU
          </Typography>
          <Box>lol</Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </ThemeProvider>
  )
}
