import { WorkflowProvider } from './context/WorkflowContext'
import DashboardLayout from './components/dashboard/DashboardLayout'

function App() {
    return (
        <WorkflowProvider>
            <DashboardLayout />
        </WorkflowProvider>
    )
}

export default App
