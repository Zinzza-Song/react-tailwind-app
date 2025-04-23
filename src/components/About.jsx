import React from 'react'

const About = () => {
  return (
    <section
      name="about"
      className="h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About this company</h2>

          <p className="py-l text-3xl text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <p className="mt-20 text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p className="mt-20 text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
      </div>
    </section>
  )
}

export default React.memo(About)
