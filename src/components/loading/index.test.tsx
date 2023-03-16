import { render } from "@testing-library/react";
import { Loading } from ".";

test("should render as expected", () => {
  const { asFragment } = render(<Loading />);

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="loading-container"
  >
    <div
      aria-busy="true"
      aria-label="Transaction data loading"
      class=""
      data-testid="tail-spin-loading"
      role="status"
      style="display: flex; justify-content: center; padding-top: 100px; column-fill: balance;"
    >
      <svg
        data-testid="tail-spin-svg"
        height="80"
        viewBox="0 0 38 38"
        width="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <lineargradient
            id="a"
            x1="8.042%"
            x2="65.682%"
            y1="0%"
            y2="23.865%"
          >
            <stop
              offset="0%"
              stop-color="#1e1e27"
              stop-opacity="0"
            />
            <stop
              offset="63.146%"
              stop-color="#1e1e27"
              stop-opacity=".631"
            />
            <stop
              offset="100%"
              stop-color="#1e1e27"
            />
          </lineargradient>
        </defs>
        <g
          fill="none"
          fill-rule="evenodd"
        >
          <g
            transform="translate(1 1)"
          >
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              id="Oval-2"
              stroke="#1e1e27"
              stroke-width="2"
            >
              <animatetransform
                attributeName="transform"
                dur="0.9s"
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
                type="rotate"
              />
            </path>
            <circle
              cx="36"
              cy="18"
              fill="#fff"
              r="1"
            >
              <animatetransform
                attributeName="transform"
                dur="0.9s"
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
                type="rotate"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
    Loading...
  </div>
</DocumentFragment>
`);
});
