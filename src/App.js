function App() {
  return (
    <section class="p-6 flex min-h-screen flex-col justify-center bg-primary-black text-white">
      <div class="container mx-auto">
        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <div class="flex flex-col w-full sm:w-1/2 gap-y-3">
            <p class="text-2xl text-primary-yellow font-semibold">Hello 👋</p>
            <h1 class="text-6xl text-primary-white font-bold">
              I'm Simona Hriscu
            </h1>
            <p class="text-primary-white fw-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <button class="bg-primary-yellow hover:bg-blue-700 text-primary-black font-semibold py-2 px-4 mr-5 rounded">
                Download resume
              </button>
              <a
                href="mailto:simona.hriscu06+job@gmail.com"
                class="text-primary-white underline font-light underline-offset-4 whitespace-nowrap"
              >
                Email me
              </a>
            </div>
          </div>
          {/* <h1 class="text-6xl font-primary-white mt-4 sm:mt-0">text 2</h1> */}
        </div>
      </div>
    </section>
  );
}

export default App;
