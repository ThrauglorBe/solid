import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import {createEffect, createSignal, For, Show} from "solid-js";

const App: Component = () => {
  const [rows, setRows] = createSignal(10);
  const [rendered, setRendered] = createSignal(false);
  




  return (
    <div class={styles.App}>
      <div>
        <button onclick={() => setRendered(!rendered())}>render rows</button>
        <input min="1" type="number" onInput={(e) => setRows(parseInt(e.currentTarget.value))} value={rows()}/>
      </div>
      <Show when={rendered()}>
        <For each={Array(rows())} fallback={<div>Loading...</div>}>
          {(item, index) => {
            return (
                <div style="display: flex;">
                  <div>Some text goes here: {index() + 1}</div>
                  <button onclick={() => setRows(rows() - 1)}>delete row</button>
                </div>
            )
          }}
        </For>
      </Show>
    </div>
  );
};

export default App;
