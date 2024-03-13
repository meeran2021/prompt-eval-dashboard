import React, { useState } from "react";
import "./PromptRating.css";

const PromptRating = () => {
  const [specificity, setSpecificity] = useState(0);

  const [detailed, setDetailed] = useState(0);

  const [relevant, setRelevant] = useState(0);

  const [presentation, setPresentation] = useState(0);

  const handleSpecificityClick = (rating) => {
    setSpecificity(rating);
  };

  const handleDetailedClick = (rating) => {
    setDetailed(rating);
  };

  const handleRelevantClick = (rating) => {
    setRelevant(rating);
  };

  const handlePresentationClick = (rating) => {
    setPresentation(rating);
  };

  return (
    // <div >
    <div className="markdown-editor1">
      <div class="frame-1171276025">
        <div class="frame-1103">
          <div class="rate-the-prompt-with-respect-to-the-following-factors">
            Rate the prompt with respect to the following factors:
          </div>
        </div>
        <div className="markdown-editor">

          <div class="frame-1171276065">
            <div class="frame-2">
              <div class="frame-22">
                <div class="specificity">Specificity</div>
              </div>
              <div class="frame-23">
                <div class="clearly-defined-instructions-request-including-any-important-details-or-context">
                  Clearly defined instructions/request, including any important
                  details or context.
                </div>
                <div class="component-27">
                  <div className="frame-1171276052">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                      <div class="frame-24">
                        <button
                          key={rating}
                          className={`rating-button ${specificity === rating ? "active" : ""
                            }`}
                          onClick={() => handleSpecificityClick(rating)}
                        >
                          {rating}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-32">
              <div class="frame-22">
                <div class="detailed">Detailed:</div>
              </div>
              <div class="frame-23">
                <div class="include-the-expected-nature-of-response-format-length-style-persona">
                  Include the expected nature of response(format, length, style,
                  persona).
                </div>
                <div class="component-27">
                  <div className="frame-1171276052">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                      <div class="frame-24">
                        <button
                          key={rating}
                          className={`rating-button ${detailed === rating ? "active" : ""
                            }`}
                          onClick={() => handleDetailedClick(rating)}
                        >
                          {rating}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-43">
              <div class="frame-22">
                <div class="relevant">Relevant</div>
              </div>
              <div class="frame-23">
                <div class="relevant-to-current-competency-where-overlapping-between-consistencies-can-exist">
                  Relevant to current competency where overlapping between
                  consistencies can exist.
                </div>
                <div class="component-27">
                  <div className="frame-1171276052">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                      <div class="frame-24">
                        <button
                          key={rating}
                          className={`rating-button ${relevant === rating ? "active" : ""
                            }`}
                          onClick={() => handleRelevantClick(rating)}
                        >
                          {rating}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-53">
              <div class="frame-22">
                <div class="presentation-and-formatting">
                  Presentation and Formatting:
                </div>
              </div>
              <div class="frame-23">
                <div class="uses-delimiters-markdown-latex-proper-spelling-grammar-do-not-uses-html">
                  Uses delimiters, markdown, latex, proper spelling &amp; grammar.
                  Do not uses HTML.
                </div>
                <div class="component-27">
                  <div className="frame-1171276052">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                      <div class="frame-24">
                        <button
                          key={rating}
                          className={`rating-button ${presentation === rating ? "active" : ""
                            }`}
                          onClick={() => handlePresentationClick(rating)}
                        >
                          {rating}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="frame-1171276037">
        <div class="buttons-mod-24-px-tc">
          <div class="confirm-plan-selection"> Add Detailed Feedback </div>
        </div>
        <div class="frame-1171276040">
          <div class="component-15">
            <div class="rejected"> Reject </div>
          </div>
          <div class="component-16">
            <div class="aprooved"> Aproove </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptRating;
