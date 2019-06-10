import { Component, h } from '@stencil/core';


@Component({
  tag: 'gb-tile',
  styleUrl: 'gb-tile.css',
  shadow: true
})
export class GBTile {

  render() {
    return (
      <div>
        <header>
          <h1>GB Tile</h1>
        </header>

        <main class="gb-tile">
          <div>Product image</div>
          <slot>
            <div class="name">Product name</div>
          </slot>
          <div class="price">Product price</div>
          <div class="description">Product description</div>
        </main>
      </div>
    );
  }
}
