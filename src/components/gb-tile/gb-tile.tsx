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
          <slot name="all">
            <div>Product image</div>
            <slot name="name">
              <div class="name">Product name</div>
            </slot>
            <div class="price">Product price</div>
            <div class="description">Product description</div>
            <span onClick={this.buyNow}>
              <slot name="buy-button">
                <button class="buy">Buy now!</button>
              </slot>
            </span>
          </slot>
        </main>
      </div>
    );
  }

  buyNow() {
    console.log('>> Clicked Buy Now button. (default functionality)')
  }
}
