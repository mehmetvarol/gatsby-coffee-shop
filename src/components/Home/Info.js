import React from 'react'
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Hikayemiz"/>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit placeat aliquam, corrupti libero odio qui excepturi voluptatem non eaque corporis dignissimos, ullam error molestias earum sunt veritatis perspiciatis voluptatum commodi velit vel. Rerum placeat, nam a porro sapiente illum harum aspernatur odio dignissimos impedit sed! Vero cumque velit praesentium?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
