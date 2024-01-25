import Background from "../Components/Background/Background"

const InfoTemplate = ({ children }: any) => {
  return (
    <main>
      <Background />
      {children}
    </main>
  )
}

export default InfoTemplate