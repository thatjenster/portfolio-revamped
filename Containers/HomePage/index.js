import MaxWidthContainer from "Components/MaxWidthContainer"
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      <MaxWidthContainer>
        <Image 
          src="/herobanner.jpeg"
          width={1090}
          height={490}
          layout="responsive"
        />
      </MaxWidthContainer>
    </main>
  )
}

