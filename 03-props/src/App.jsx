import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card
        user='Sadaf'
        age={17}
        img='https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600'
        school='Aliah University'
      />

      <Card
        user='Aafia'
        age={21}
        img='https://plus.unsplash.com/premium_photo-1683140908202-a8741a87045a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687'
        school='DAV'
      />

      <Card
        user='Umar'
        age={8}
        img='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1176'
        school='PRMPS'
      />
    </div>
  )
}

export default App
