import { Terminal } from "lucide-react"
import "./App.css"
import { Button } from "./components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const shadcnAlert = () => {
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
}

function App() {
  return (
    <>
      <div>
        <h1>Shadcn-UI with Prathamesh</h1>
        <Button onClick={shadcnAlert} size={"lg"}>
          Click me
        </Button>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up! Prathamesh this is alert</AlertTitle>
          <AlertDescription>This is alert description</AlertDescription>
        </Alert>
        <AlertDialog>
          <AlertDialogTrigger>
          <Button onClick={shadcnAlert} size={"lg"}>
          Click me
        </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}

export default App
