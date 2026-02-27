## ⚠️ Important Notes for Contributors

Before making any changes to the Nyasa 2026 website, please read and follow the instructions below carefully:

1. **Team Section Updates**
   If you want to modify the Team section, please make changes only in:

   * `about.js`
   * `about.html`

2. **Developer Credits**
   Do **not remove** the developer names or developer cards from the website.

   * If you want UI changes or want to add something, please contact the listed developers first.

3. **Deployment Instructions**

   * The website is deployed on the **IITGN server**.
   * Upload updated files using an **FTP client**.
   * If you face any issues, contact the developers.
   * FTP credentials (User ID & Password) must be obtained from the **Core team** or are available in the **Nyasa Gmail**.

4. **Technology Restriction (IMPORTANT)**

   * This website must remain in **HTML, CSS, and JavaScript only**.
   * **Do NOT migrate** it to React, Next.js, or any other framework.
   * IITGN servers support and deploy **static websites only**.

5. **Maintain Folder Structure**
   Please keep all images, assets, and code organized exactly as per the existing structure so that future teams do not face issues.

## Complete File Structure

```text
Folder PATH listing for volume New Volume
Volume serial number is E297-5FA8
F:.
|   about.html
|   activities.html
|   blog-post.html
|   blog.html
|   contribute.html
|   distribution.html
|   gallery.html
|   index.html
|   news.html
|   pathway.html
|   Readme.md
|   report.html
|   sanjeevani.html
|   summercamp.html
|   
+---activitiesPages
+---assets
|   +---css
|   |       about-section.css
|   |       about.css
|   |       activities-section.css
|   |       activities.css
|   |       activity-detail.css
|   |       blog-post.css
|   |       blog.css
|   |       contribute.css
|   |       footer.css
|   |       gallery.css
|   |       hero-slider.css
|   |       home.css
|   |       navbar.css
|   |       news.css
|   |       report.css
|   |       sponsor.css
|   |       stats-section.css
|   |       style.css
|   |       test.css
|   |       testimonials-section.css
|   |       vision-mission.css
|   |       
|   +---data
|   |       sponsors.json
|   |       testimonials.json
|   |       
|   +---gifs
|   +---images
|   |   +---akanksha
|   |   |       20240912_163358.jpg
|   |   |       
|   |   +---blog
|   |   |       blogLandingImg.png
|   |   |       blogLangingImage.png
|   |   |       Jagruti Patil.jpg
|   |   |       Prasad Pawar.jpg
|   |   |       Ravi Kumawat.jpg
|   |   |       
|   |   +---chetana
|   |   |       chetana.jpg
|   |   |       
|   |   +---developers
|   |   |       Darpana Desai.jpg
|   |   |       Jagruti Patil.jpg
|   |   |       Ravi Kumawat.jpg
|   |   |       Shweta Roshia.jpg
|   |   |       
|   |   +---gallery
|   |   |       15aug.JPG
|   |   |       15aug1.JPG
|   |   |       15aug2.JPG
|   |   |       dist.jpg
|   |   |       Diwali.JPG
|   |   |       diwali1.JPG
|   |   |       diwali2.JPG
|   |   |       diwali4.JPG
|   |   |       DSC5262.jpg
|   |   |       DSC5275.jpg
|   |   |       DSC5461.jpg
|   |   |       edu.jpg
|   |   |       edu1.jpg
|   |   |       health.JPG
|   |   |       nyasaschool.JPG
|   |   |       sanjeevani2025.JPG
|   |   |       Summercamp.JPG
|   |   |       Taare_Zameen_Par.png
|   |   |       winter2024.jpg
|   |   |       winter_camp.JPG
|   |   |       
|   |   +---landingPagePhotos
|   |   |       activitylandin.jpeg
|   |   |       DSC_0343.JPG
|   |   |       IMG_9349.JPG
|   |   |       IMG_9352.JPG
|   |   |       Team.JPG
|   |   |       teamlanding.jpeg
|   |   |       
|   |   +---Logo
|   |   |       favicon.ico
|   |   |       Nyasa_logo.png
|   |   |       Nyasa_logo_icon.png
|   |   |       
|   |   +---news
|   |   |       Ahmdamirror.png
|   |   |       Ahmedabad Mirror.jpg
|   |   |       chitralekha.png
|   |   |       city_life.png
|   |   |       dailyhunt.png
|   |   |       gujarati_smachar.png
|   |   |       gujratsmash2.png
|   |   |       gujratsmash3.png
|   |   |       india_education.png
|   |   |       INEN.png
|   |   |       rajsthan_patrika.png
|   |   |       sandeshgn.png
|   |   |       telegraph.png
|   |   |       the_live_ahmedabad.png
|   |   |       unn.png
|   |   |       vibes_of_india.png
|   |   |       
|   |   +---other
|   |   |       20240902_173830.jpg
|   |   |       chetana.JPG
|   |   |       dist.jpg
|   |   |       ganesh.jpg
|   |   |       Special_Teaching.png
|   |   |       Taare_Zameen_Par.png
|   |   |       tarezamipr.jpeg
|   |   |       tarezamipr.png
|   |   |       wild.jpg
|   |   |       Wildlife_celeberation.png
|   |   |       
|   |   +---pathwayprogram
|   |   |       pathway.jpg
|   |   |       Pathways.jpeg
|   |   |       
|   |   +---sanjeevani
|   |   |       DSC07195.JPG
|   |   |       sanjeevani12024.png
|   |   |       sanjeevani12025.JPG
|   |   |       sanjeevani2024.png
|   |   |       sanjeevani2025.JPG
|   |   |       
|   |   +---slider
|   |   |       chetana.jpg
|   |   |       event.png
|   |   |       sanjeevani.JPG
|   |   |       slider_contribute.jpg
|   |   |       
|   |   +---sponsors
|   |   |       alumni.png
|   |   |       awestruck.png
|   |   |       dawat.png
|   |   |       desai.png
|   |   |       gspc.png
|   |   |       help.png
|   |   |       jk.png
|   |   |       library.png
|   |   |       mohani.png
|   |   |       nirmay.png
|   |   |       radhe.png
|   |   |       
|   |   +---summercamp
|   |   |       Copy of _DSC0324.JPG
|   |   |       sports.png
|   |   |       sports2.png
|   |   |       summer2023.png
|   |   |       summer2024.jpg
|   |   |       summer2024.png
|   |   |       summer_art.jpg
|   |   |       tarezamipr.png
|   |   |       yoga.JPG
|   |   |       
|   |   \---team
|   |           Abhishek Shekhar Shinde.jpg
|   |           Aditya Gupta.jpg
|   |           Darpana Desai.jpg
|   |           Devesh Kumar.jpg
|   |           Divyanshu Chandani.jpeg
|   |           falguni_ma'am.jpeg
|   |           Ganivada Lalith.jpeg
|   |           Jagruti Patil.jpeg
|   |           Jagruti Patil.jpg
|   |           jannat image.jpeg
|   |           Kovid Parmar.jpg
|   |           Krista_sir.jpg
|   |           Lakshya Kesarwani.webp
|   |           Manas Gharpure.jpg
|   |           Manavi.jpg
|   |           Meshvakumari Chaudhari.jpeg
|   |           Modalavalasa Anusha.jpg
|   |           Nupoor Assudani.jpg
|   |           Parth Raut.jpeg
|   |           Prabhat.jpg
|   |           Prasad Pawar.jpg
|   |           Pravalli Matta.jpeg
|   |           Priyanshi Shah.jpg
|   |           Rahul Ahirwar.jpg
|   |           Rashid Pathan.jpg
|   |           Ravi Kumawat.jpg
|   |           Ruchika Dhawan 2.jpg
|   |           Sachin Kumar.jpg
|   |           Sai Krishna.JPG
|   |           Sambhav Dessai.jpg
|   |           Sejal Paliwal.jpeg
|   |           Shailesh Verma.jpeg
|   |           Shweta Roshia.jpg
|   |           Swami Aryanathan Gantedi.jpg
|   |           Vaibhav Agrawal.jpg
|   |           
|   +---js
|   |       about.js
|   |       activities-carousel.js
|   |       activities.js
|   |       blog-post.js
|   |       blog.js
|   |       component-loader.js
|   |       contribute.js
|   |       footer.js
|   |       gallery.js
|   |       hero-slider.js
|   |       home.js
|   |       main.js
|   |       news.js
|   |       report.js
|   |       slider.js
|   |       sponsor.js
|   |       stats-counter.js
|   |       testimonial.js
|   |       
|   \---reports
|           Nyasa Annual Report 2020-21.pdf
|           Nyasa Annual Report 2021-22.pdf
|           Nyasa Annual Report 2022-23.pdf
|           Nyasa Annual Report 2023-24.pdf
|           Nyasa Annual Report 2024-25.pdf
|           
\---components
        about-section.html
        activities-preview.html
        footer.html
        hero-slider.html
        home-content.html
        navbar.html
        sponsors.html
        stats-section.html
        testimonials.html
        vision-mission.html
        
```

## Page Guide (Every Page)

### Main Website Pages
- `index.html`: Home page with hero content, highlights, stats, testimonials, and call-to-action sections.
- `about.html`: Team-focused page with faculty in charge, current team members, and previous teams.
- `activities.html`: Activities hub page that introduces current and ongoing program areas.
- `distribution.html`: Detailed page for the Distribution Drive with monthly log and impact summary.
- `pathway.html`: Pathway to Schooling program page covering implementation model and outcomes.
- `sanjeevani.html`: Sanjeevani Medical Camp page with year-wise camp history and statistics.
- `summercamp.html`: Summer Camp page explaining timeline, focus areas, and program format.
- `blog.html`: Nyasa Stories listing page with blog highlights, news links, and report references.
- `blog-post.html`: Individual long-form blog article page (volunteer-to-coordinator journey story).
- `news.html`: Articles and media coverage page listing external and press features.
- `report.html`: Impact reports page linking annual reports (PDFs) and report cards.
- `gallery.html`: Photo gallery page with event and activity image collections.
- `contribute.html`: Contribution page for donations, volunteering, and contact/action forms.

### Shared Component Pages
- `components/navbar.html`: Reusable top navigation used across pages.
- `components/hero-slider.html`: Home hero slider markup for key campaign slides.
- `components/home-content.html`: Shared featured content section used on the homepage.
- `components/about-section.html`: Reusable about section block.
- `components/activities-preview.html`: Reusable activities preview cards/section.
- `components/stats-section.html`: Reusable impact counters/statistics section.
- `components/testimonials.html`: Reusable volunteer testimonial section.
- `components/sponsors.html`: Reusable sponsors section.
- `components/vision-mission.html`: Reusable vision and mission section.
- `components/footer.html`: Reusable footer with attribution and links.

## Notes
- `activitiesPages/` currently exists as a folder but does not contain files.
- CSS is under `assets/css/`, JavaScript under `assets/js/`, JSON data under `assets/data/`, images under `assets/images/`, and PDFs under `assets/reports/`.
