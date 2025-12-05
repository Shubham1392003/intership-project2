<script>
  export let chapter = 1;
  export let verses = []; // Verse list from API
  export let openVerse; // Function to open verse (play audio + show popup)
  export let openWholeChapter; // For whole chapter
  export let back; // back to chapter page

  let popupOpen = false;
  let popupLyrics = "";
  let popupAudio = "";
  let fontSize = 20;

  // open popup
  function playShlok(lyrics, audio) {
    popupOpen = true;
    popupLyrics = lyrics;
    popupAudio = audio;
  }
</script>

<section class="shlok  pt-20" style="display:block;">
  <div class="shlok_main">
    <!-- BACK BUTTON -->
    <div class="back_chapter" on:click={back}>&lt; Back</div>

    <!-- HEADER -->
<div class="shlok_head">
  <p class="chapter_title">CHAPTER {chapter}</p>
</div>


    <!-- SORT BAR -->
    <div class="shlok_sort">
      <div class="shlok_h">
        <p>Verse</p>
      </div>
    </div>

    <!-- VERSE CONTAINER -->
    <div class="shlok_container">
      <div class="shlok_area">
        <!-- WHOLE CHAPTER CARD -->
        <!-- <div class="shlok_img" on:click={() => openWholeChapter()}>
          <img src="src/lib/assets/sletter.png" alt="scroll" />
          <div class="shlok_num"><p>Whole Chapter</p></div>
          <div class="shlok_play">
            <img src="src/lib/assets/play.png" />
          </div>
        </div> -->

        <!-- INDIVIDUAL VERSES -->
        {#each verses as v}
          <div
            class="shlok_img"
            on:click={() =>
              playShlok(
                v.lyrics || v.html || v.text || v.shlok || "",
                v.audio || v.audio_url || v.mp3 || v.songurl || v.music || ""
              )}
          >
            <img src="src/lib/assets/sletter.png" alt="scroll" />
            <div class="shlok_num">
      <p>{v.shlok_no == "0" ? "Whole Chapter" : v.shlok_no}</p>
    </div>

    <!-- PLAY BUTTON -->
    <div class="shlok_play">
      <img src="src/lib/assets/play.png">
    </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- POPUP -->
  {#if popupOpen}
    <div class="song_popup">
      <div class="deliveryOverlay" on:click={() => (popupOpen = false)}></div>

      <div class="song_pop_close" on:click={() => (popupOpen = false)}>x</div>

      <div class="inner_background_pop">
        <center>
          <div class="col-md-8 music_popup">
            <div class="music-bg">
              <div class="music_box_contral">
                <div class="music_pro">
                  <!-- FONT CONTROL -->
                  <div class="font_control">
                    <div class="sild_controler">
                      <b>Font Size:</b>
                      <input
                        type="range"
                        min="12"
                        max="65"
                        bind:value={fontSize}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- LYRICS AREA -->
              <div class="lyrics" style="font-size:{fontSize}px;">
                {@html popupLyrics}
                <audio controls autoplay style="width:100%;">
                  <source src={popupAudio} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  {/if}
</section>

<style>


  /* ========================= CHAPTER ========================= */
  .chapter_title {
  font-size: 0.5rem; /* same as text-4xl */
  color: #c41e3a;
  border-bottom: 2px solid #c41e3a;
  display: inline-block;
  padding-bottom: 4px;
  font-weight: 200;
}

@media (min-width: 768px) {
  .chapter_title {
    font-size: 78px;
  }
}

  /* ========================= SHLOK MAIN AREA ========================= */

  .shlok_main {
    padding: 20px;
    width: 100%;
  }

  .back_chapter {
    cursor: pointer;
    color: #c41e3a;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .shlok_head {
    text-align: center;
    margin-bottom: 50px;
  }

.shlok_head p {
font-size: 2.0rem;
  }

  .shlok_sort {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    border-bottom: 2px solid #c41e3a;
    border-top: 2px solid #c41e3a;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .shlok_h p {
    font-size: 22px;
    font-weight: 400;
    color: #c41e3a;
  }

  /* ========================= VERSE CARD GRID ========================= */

  .shlok_container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .shlok_area {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 35px;
    width: 100%;
    max-width: 1200px;
    justify-items: center;
  }

  /* ========================= SCROLL CARD ========================= */

  .shlok_img {
    width: 180px;
    height: 240px;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .shlok_img:hover {
    transform: scale(1.05);
  }

  .shlok_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Verse number label */
  .shlok_num {
  position: absolute;
  top: 42%;        /* perfect vertical alignment */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 5px 0;
  color: white;
}

.shlok_num p {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
}
  /* ========================= PLAY BUTTON ========================= */

  .shlok_play {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 155px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;       /* No border */
  /* background: white;  Always white */
  transition: 0.3s;
}

.shlok_play img {
  width: 55px;
  height: 55px;
}

/* Remove hover color changes */
/* .shlok_img:hover .shlok_play {
  background: white !important;
} */

.shlok_img:hover .shlok_play img {
  filter: none !important;
}

  /* ========================= POPUP OVERLAY ========================= */

  .song_popup {
    position: fixed;
    inset: 0;
    z-index: 999;
  }

  .deliveryOverlay {
    position: absolute;
    inset: 0;
    background: #000000b4;
  }

  .song_pop_close {
    position: absolute;
    top: 20px;
    right: 35px;
    font-size: 28px;
    cursor: pointer;
    /* background: rgb(62, 73, 57); */
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    line-height: 35px;
    color:white;
  }

  /* ========================= POPUP BOX ========================= */

  .inner_background_pop {
    position: relative;
    margin-top: 50px;
    z-index: 10;
  }

  .music_popup {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    max-height: 80vh;
    overflow-y: auto;
    width: 90%;
  }

  .music-bg {
    padding: 10px 20px;
  }

  /* ========================= FONT SLIDER ========================= */

  .font_control {
    margin-bottom: 10px;
  }

  .sild_controler b {
    font-size: 16px;
  }

  .sild_controler input[type="range"] {
    width: 100%;
    margin-top: 8px;
  }

  /* ========================= LYRICS ========================= */

  .lyrics {
    white-space: pre-line;
    color: #333;
    margin-top: 20px;
    line-height: 1.6;
  }

  /* Smooth scroll for verse text */
  .lyrics::-webkit-scrollbar {
    width: 8px;
  }
  .lyrics::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 5px;
  }
</style>
