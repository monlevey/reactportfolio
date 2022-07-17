import React from 'react';
// import css from './footer.module.css';
export default function Footer() {
 
    return (
        <div className> 
        {/* <!-- Contact me information and links to github and linkedin --> */}
      <article>
        <div class="center">
            <ul>
          <a href="https://github.com/monlevey" target="_blank"><h3>GitHub</h3></a>
       </ul>
       </div>
       <div class="center"> 
      <ul>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B6Rc246d6TRmou5ma4JITJQ%3D%3D" target="_blank"><h3>Linkedin</h3>
        <div>
          <i class="fa fa-linkedin-square"></i>
          </div>
          </a>
      </ul>
      </div>
      </article>
    </div>
  )
}