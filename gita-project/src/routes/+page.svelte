<script>
  import { Facebook, Twitter, Youtube, Instagram } from "lucide-svelte";
  import { getChapter } from "$lib/api/geeta.js";
  import ShlokPage from "$lib/components/ShlokPage.svelte";

  let mobileMenu = false;
  let activeDropdown = null;

  let selectedChapter = null;
  let verses = [];
  let loading = false;

  function back() {
    selectedChapter = null;
  }

  function toggleDropdown(name) {
    activeDropdown = activeDropdown === name ? null : name;
  }

  async function loadChapter(ch) {
    selectedChapter = ch;
    loading = true;
    verses = await getChapter(ch);  // must return [{ number, lyrics, audio }]
    loading = false;
    console.log(verses);

  }

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

  function htmlContent(node, html) {
    node.innerHTML = html;
    return {
      update(newHtml) {
        node.innerHTML = newHtml;
      }
    };
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- ========================= HEADER ========================= -->
<header class="bg-white shadow-sm w-full z-50 fixed top-0 left-0">
  <div class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <img
        src="src/lib/assets/logo.png"
        alt="Logo"
        class="w-20 h-auto object-contain"
      />
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-10">
      <!-- Search -->
      <button class="text-gray-700 hover:text-gray-900">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <!-- Ayurveda -->
      <div class="relative">
        <button
          on:click={() => toggleDropdown("ayurveda")}
          class="text-gray-700 hover:text-gray-900 text-[13px] flex items-center gap-1"
        >
          AYURVEDA <span class="text-[13px]">▼</span>
        </button>
        {#if activeDropdown === "ayurveda"}
          <div
            class="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-48"
          >
            <a class="block px-4 py-2 hover:bg-gray-100">Ayurveda Basics</a>
            <a class="block px-4 py-2 hover:bg-gray-100">Doshas</a>
          </div>
        {/if}
      </div>

      <!-- Yoga -->
      <div class="relative">
        <button
          on:click={() => toggleDropdown("yoga")}
          class="text-gray-700 hover:text-gray-900 text-[13px] flex items-center gap-1"
        >
          YOGASUTRAS <span class="text-[13px]">▼</span>
        </button>
        {#if activeDropdown === "yoga"}
          <div
            class="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-48"
          >
            <a class="block px-4 py-2 hover:bg-gray-100">Yoga Sutras</a>
          </div>
        {/if}
      </div>

      <a class="text-gray-700 hover:text-gray-900 text-[13px]">BHAGAVAD GITA</a>

      <!-- Upanisads -->
      <div class="relative">
        <button
          on:click={() => toggleDropdown("upanisads")}
          class="text-gray-700 hover:text-gray-900 text-[13px] flex items-center gap-1"
        >
          UPANISADS <span class="text-[13px]">▼</span>
        </button>
        {#if activeDropdown === "upanisads"}
          <div
            class="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-48"
          >
            <a class="block px-4 py-2 hover:bg-gray-100">Upanisads</a>
          </div>
        {/if}
      </div>

      <!-- Sanskrit -->
      <div class="relative">
        <button
          on:click={() => toggleDropdown("sanskrit")}
          class="text-gray-700 hover:text-gray-900 text-[13px] flex items-center gap-1"
        >
          SANSKRIT <span class="text-[13px]">▼</span>
        </button>
        {#if activeDropdown === "sanskrit"}
          <div
            class="absolute top-full left-0 bg-white shadow-lg rounded py-2 min-w-48"
          >
            <a class="block px-4 py-2 hover:bg-gray-100">Sanskrit</a>
          </div>
        {/if}
      </div>

      <a class="text-gray-700 hover:text-gray-900 text-[13px]">CONTACT US</a>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden text-gray-700"
      on:click={() => (mobileMenu = !mobileMenu)}
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenu}
    <div
      class="md:hidden bg-white px-6 py-4 space-y-3 text-gray-700 font-medium"
    >
      <button class="block w-full text-left">AYURVEDA</button>
      <button class="block w-full text-left">YOGASUTRAS</button>
      <button class="block w-full text-left">UPANISADS</button>
      <button class="block w-full text-left">SANSKRIT</button>
      <a class="block">BHAGAVAD GITA</a>
      <a class="block">CONTACT US</a>
    </div>
  {/if}
</header>

<!-- ========================= ONE BACKGROUND FOR WHOLE PAGE ========================= -->
<div
  class="w-full pt-[110px]"
  style="
    background: url('src/lib/assets/pic1.jpg') fixed top center no-repeat;
    background-size: cover;
  "
>
  <!-- ========================= HERO SECTION ========================= -->
  <div class="relative w-full overflow-visible min-h-[32em]">
    <!-- TITLE touching header perfectly -->
    <div
      class="absolute -top-[35px] left-0 w-full z-[2] flex justify-center overflow-visible"
    >
      <h1
        class="text-[#3E4939] text-[38px] md:text-[78px] font-[Cinzel] text-center w-full py-6 px-12"
        style="background-color:#ffffffc7; text-shadow:0px 4px 4px rgba(0,0,0,0.25);"
      >
        BHAGAVAD GITA
      </h1>
    </div>
    <!-- BANNER closer to header -->
    <div
      class="absolute inset-0 flex items-start justify-center z-[1] pt-[90px]"
    >
      <img
        src="src/lib/assets/gita_banner.png"
        class="w-full h-auto object-contain"
        alt="Gita Banner"
      />
    </div>
  </div>

  <!-- ========================= CHAPTERS SECTION ========================= -->
   <!-- ✅ If a chapter is selected → Show ShlokPage -->
{#if selectedChapter}
  <ShlokPage 
    chapter={selectedChapter}
    verses={verses}
    back={back}
  />
  <!-- stop showing the chapter list -->
  {:else}

  <section class="relative py-20 px-4">
    <!-- Floating Gita Book (half in header, half in chapter) -->
    <div class="relative z-[30] flex justify-center -mt-[120px] mb-6">
      <img
        src="src/lib/assets/gita_open.png"
        alt="Gita Open"
        class="w-[200px] h-auto object-contain drop-shadow-xl"
      />
    </div>

    <!-- CONTENT -->
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16 mt-2">
        <h2
          class="text-4xl text-[#c41e3a] border-b-4 border-[#c41e3a] inline-block pb-1"
        >
          GITA CHAPTERS
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-2">
        {#each chapters as chapter}
          <div class="flex justify-center">
            <div
              class="chapter cursor-pointer"
              on:click={() => loadChapter(chapter)}
            >
              <!-- IMAGE -->
              <div class="chapter_img">
                <img src="src/lib/assets/gita_book.jpg" alt="" />
              </div>

              <!-- NUMBER BAR -->
              <div class="chapter_num">
                <p>{chapter}</p>
              </div>
            </div>
          </div>

          <style>
            /* OUTER DIAMOND BOX */
            .chapter {
              width: 147px;
              height: 147px;
              overflow: hidden;
              position: relative;
              transform: rotate(45deg);
              border-radius: 15px;
              border: 1px solid #928c8c;
              margin: 30px;
              cursor: pointer;
            }

            /* INNER IMAGE (BIG + CENTERED PERFECTLY) */
            .chapter_img img {
              width: 500px; /* Bigger image */
              position: absolute;
              transform: rotate(-45deg);
              top: 1px; /* moves image down/up */
              left: 1px; /* moves image left/right */
            }

            /* NUMBER BAR (GRAY TRANSLUCENT) */
            .chapter_num {
              position: absolute;
              background-color: #352c2cad;
              width: 258px;
              transform: rotate(-45deg);
              top: 36%;
              left: -41%;
              padding: 5px 0;
              text-align: center;
            }

            .chapter_num p {
              font-size: 20px;
              font-weight: 500;
              color: white;
              margin: 0;
              text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
            }
          </style>
        {/each}
      </div>
   {#if loading}
  <p class="text-center text-lg text-black mt-6">Loading verses...</p>
{/if}

<!-- {#if selectedChapter && verses.length}
  <div class="mt-10 bg-white/60 p-6 rounded shadow-lg backdrop-blur-sm">
    
    <h3 class="text-2xl font-bold text-center mb-4 text-[#3E4939]">
      Chapter {selectedChapter} — Verses
    </h3>

    {#each verses as v}
      <div class="my-4 p-4 bg-white/80 rounded shadow">
        
        <!-- FIX: Pass v.html here -->
        <!-- <div
          class="text-gray-900 text-base leading-relaxed"
          use:htmlContent={v.html}
        ></div>c

        {#if v.audio}
          <audio controls class="mt-2 w-full">
            <source src={v.audio} type="audio/mpeg" />
          </audio>
        {/if}

      </div>
    {/each}

  </div>
{/if} -->


    </div>
  </section>
  {/if}
</div>


<!-- ========================= FOOTER ========================= -->
<footer
  class="text-white py-6 bg-cover bg-center bg-no-repeat relative w-full"
  style="background-image: url('src/lib/assets/footerimg.png');"
>
  <div class="relative max-w-7xl mx-auto">
    <!-- CONNECT -->
    <div class="text-center">
      <div class="flex justify-center gap-3">
        <h4 class="text-2xl font-serif mb-2 text-[rgb(202,202,202)]">
          Connect
        </h4>
        <button
          class="border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#3d4d42] transition"
        >
          <Facebook class="w-5 h-5" />
        </button>
        <button
          class="border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#3d4d42] transition"
        >
          <Twitter class="w-5 h-5" />
        </button>
        <button
          class="border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#3d4d42] transition"
        >
          <Youtube class="w-5 h-5" />
        </button>
        <button
          class="border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#3d4d42] transition"
        >
          <Instagram class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- LOGO -->
    <div class="text-center">
      <img src="src/lib/assets/logo1.png" alt="Logo" class="mx-auto w-24" />

      <h3 class="text-4xl font-serif text-[rgb(174,161,126)] mt-2">
        WELLBEING~SVASTI
      </h3>
    </div>

    <!-- COPYRIGHT -->
    <div class=" text-center text-xs text-gray-300">
      <p class="text-sl">
        © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed
        by
      </p>
      <p class="text-cyan-400 mt-1 text-sl">Burning Desire Inclusive</p>
    </div>
  </div>
</footer>
