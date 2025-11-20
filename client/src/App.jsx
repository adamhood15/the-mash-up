import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/apolloClient'

import Header from './components/ui/Header/Header'
import Footer from './components/ui/footer/Footer'
import AppRoutes from './routes/AppRoutes'

import './App.css'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 min-h-0'>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}
