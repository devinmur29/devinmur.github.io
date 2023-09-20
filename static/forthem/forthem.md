# For Them
For Them is a piece for solo clarinet and live electronics that I composed using MaxMSP and sibelius. The piece is meant to be performed with a live solo clarinet, and either a pedal or person that sends a signal to a Max patch to progress the electronics through each phase of the piece (of which there are 8). In this way, the electronics become their own instrument used to accompany the clarinetist. I created the signal routing and processing pipelines for this piece in Max with the help of the <a href=https://cycling74.com/articles/cnmat-odot-tools-for-osc-and-beyond>odot package</a>.

<figure>
  <img src="./forthem/forthem.png" alt="Overview of Max Patch">
  <figcaption>Max Patch used to control electronics and signal processes in "For Them"</figcaption>
</figure>

For this project, I really wanted to explore sonification and how data can be represented with music in a meaningful way. My piece explores the sensitive but increasingly pertinent topic of gun violence in the United States. To compose the clarinet music, I mapped the timeline of mass shootings in the United States for the past 100 years to a 33 bar piece of music. So every measure between bar 11 and bar 44 represents 3.3 years in United States history. 
 
I used incidents considered mass shootings by at least two of the following sources: Stanford MSA Data Project, Gun Violence Archive, Mother Jones, The Washington Post, ABC News,FBI, Congressional Research service. I repeat a somber theme over these bars, disrupting the theme with random notes from the 12 semitones. In this way, I also encapsulated some serialist composition techniques. 

<figure>
  <img src="./forthem/for_them_theme.png" alt="Theme">
  <figcaption>The opening and main theme of "For Them"</figcaption>
</figure>

<figure>
  <img src="./forthem/for_them_perturbs.png" alt="Perturbs">
  <figcaption>Perturbations of the opening theme, each representing a mass shooting.</figcaption>
</figure>
 
 
I wanted to incorporate electronic techniques that would enhance these disruptions, and ended up using reverb and downsampling as the main tools for this. 

Eventually it just becomes too difficult to fit all of the notes in one measure and have the music playable on clarinet. So at measure 40, which would begin to represent the last decade or so, I give the clarinet straight sixteenth notes and have an fm synthesized drunken walk accompany the clarinet. The intention of this was to create harmonic chaos that leads all the way up to the end of measure 44. 

The opening theme also features a poem by John Keats, titled “When I Have Fears that I May Cease to Be”. I wanted to play around with turning speech into music, and when I heard this poem I thought it would be perfect to accompany the clarinet in the beginning. To do this, I first used the ~bonk object on the poem to create a binary signal stream that is "on" whenever John Keats is speaking. This signal then triggers an fm synthesis patch that picks a random harmonization of several pitches to play. These pitches are randomly chosen from a probability distribution that I have set in Max. 


<figure>
  <img src="./forthem/bonk_workflow.png" alt="Bonk Workflow">
  <figcaption>Patch showing Bonk to Fm Synthesis workflow</figcaption>
</figure>




The end of the piece features a harmonization of the theme and is mostly a representation of my own frustration and exhaustion with gun violence. I tried to communicate these two emotions with a lax tempo, glissandos, trills, and the minor third harmonizations. 

<figure>
  <img src="./forthem/for_them_trem.png" alt="Harmonizations and Tremolos">
  <figcaption>Glissandos, trills, harmonizations</figcaption>
</figure>

I was incredibly grateful to have For Them performed by principal clarinetist of the Boston Philharmonic Rane Moore as a final project presentation. Here's a recording of that performance:

<audio controls>
  <source src="./forthem/for_them_audio.wav" type="audio/wav" />
  <p>
    Download <a href="./forthem/for_them_audio.wav">WAV</a> audio.
  </p>
</audio>


And the clarinet sheet music/max patch can be downloaded here: 

 <object data="./forthem/for_them.pdf" type="application/pdf" width="75%" height="500px">
      <p>Unable to display PDF file. <a href="./forthem/for_them.pdf">Download</a> instead.</p>
