import './index.css'

const renderInitialPage = () => (
  <div className="render-page">
    <p className="initial-page-para">
      Click on an event, to view its registration details
    </p>
  </div>
)

const renderYetToRegisterPage = () => (
  <div className="render-page">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
      className="img-style"
    />
    <p className="yet_to_register-para">
      A live performance brings so munch to your relationship with dance. Seeing
      dance live can often make you fall totally in love with this beautiful art
      form
    </p>
    <button type="submit" className="register_button">
      Register Here
    </button>
  </div>
)

const renderRegisteredPage = () => (
  <div className="render-page">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="registered"
      className="img-style"
    />
    <h1 className="registered-para">
      You have already registered for the event
    </h1>
  </div>
)

const renderRegistrationClosedPage = () => (
  <div className="render-page">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      alt="registrations closed"
      className="img-style"
    />
    <h1 className="registered_para">Registrations Are Closed Now!</h1>
    <p className="registered_para">
      Stay tuned. We will reopen the registrations soon!
    </p>
  </div>
)

const statusConst = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  switch (registrationStatus) {
    case statusConst.initial:
      return renderInitialPage()

    case statusConst.registered:
      return renderRegisteredPage()

    case statusConst.yetToRegister:
      return renderYetToRegisterPage()

    case statusConst.closed:
      return renderRegistrationClosedPage()

    default:
      return 'hi'
  }
}

export default ActiveEventRegistrationDetails
