/* Cultured Machine — inline glossary preview
   Shows a short definition on hover (desktop) or tap (touch) for any link
   that points at a glossary entry (wiki/index.html#<id>), so readers don't
   have to leave the page to see what a term means.

   IMPORTANT — keep this in sync with wiki/index.html: whenever a term is
   added to the glossary, add a matching one-line entry below. See
   EDITORIAL.md "Glossary preview tooltips" for the maintenance rule.
*/
(function () {
  "use strict";

  // id -> [Term label, one-sentence plain-English blurb]
  var GLOSSARY = {
    "admet": ["ADMET", "The five properties — Absorption, Distribution, Metabolism, Excretion, Toxicity — that determine whether a drug behaves safely in the body, not just whether it hits its target."],
    "ai-agent": ["AI agent", "An AI system built on a language model but able to take multi-step actions on its own — searching, running code, calling other tools — rather than answering one question at a time."],
    "antibody-drug-conjugate": ["Antibody-drug conjugate (ADC)", "A cancer drug that uses an antibody to deliver a toxic chemotherapy payload directly to tumor cells, sparing healthy tissue."],
    "binding-affinity": ["Binding affinity", "How tightly two molecules stick together, usually reported as a dissociation constant (KD); the smaller the number, the tighter the grip."],
    "cdr": ["CDR (complementarity-determining region)", "The small loops at the tip of an antibody that actually touch its target — nearly all of an antibody's specificity lives here."],
    "checkpoint-inhibitor": ["Checkpoint inhibitor", "A drug that releases one of the immune system's own “brakes,” freeing T-cells to attack cancer cells that would otherwise hide from them. Keytruda is the best-known example."],
    "de-novo-protein-design": ["De novo protein design", "Building a brand-new protein on a computer — choosing a sequence that folds into a shape and does a job no natural protein does — rather than tweaking an existing one."],
    "dna-methylation": ["DNA methylation", "A chemical tag attached to DNA that helps switch genes on or off without changing the underlying sequence; patterns of it are often disrupted in cancer."],
    "foundation-model": ["Foundation model", "A large AI model trained on a huge, broad dataset so it learns general patterns that can be reused or fine-tuned for many specific tasks."],
    "genome-language-model": ["Genome language model", "An AI system trained on real DNA sequences to learn the statistical rules of what makes a stretch of DNA capable of coding for working biology."],
    "glp-1": ["GLP-1", "A natural gut hormone that triggers insulin release and signals fullness; drugs that mimic it (semaglutide, tirzepatide) are used for diabetes and weight loss."],
    "ind": ["IND application", "The application a company must file with the FDA before testing an experimental drug in people for the first time."],
    "kappa-opioid-receptor": ["Kappa opioid receptor (KOR)", "A brain receptor linked to pain, sedation, and negative mood states, studied as a drug target for depression."],
    "madrs": ["MADRS scale", "A 10-item, clinician-scored questionnaire used to measure how severe a person's depression is in clinical trials."],
    "mdd": ["Major depressive disorder", "A diagnosis of persistent low mood or loss of interest lasting at least two weeks and severe enough to disrupt daily life."],
    "mrna": ["mRNA", "The molecule that carries genetic instructions from DNA to a cell's protein-making machinery; synthetic mRNA is the basis of mRNA vaccines."],
    "neoantigen": ["Neoantigen", "A new protein fragment on a cancer cell caused by a tumor mutation — unique enough that the immune system can be trained to recognize and attack it."],
    "phase-trials": ["Phase 1 / 2 / 3 trials", "The three stages of human testing a drug must pass, moving from safety in a small group (Phase 1) to definitive proof it works (Phase 3)."],
    "placebo-response": ["Placebo response", "Genuine symptom improvement in trial participants given an inactive treatment, which makes proving a drug's real effect harder — especially in depression trials."],
    "protein-language-model": ["Protein language model", "An AI system trained on huge numbers of real protein sequences to learn what makes a sequence “look” natural and fold correctly, the way a text model learns language."],
    "receptor-antagonist": ["Receptor antagonist", "A drug that binds a cell receptor and blocks it from being activated, effectively switching that receptor off."],
    "rna-splicing": ["RNA splicing", "The process that edits a genetic message into different combinations before it's turned into protein; cancers can splice genes abnormally, creating tumor-specific drug targets."],
    "transcription-factor": ["Transcription factor", "A protein that controls which genes in a cell are switched on or off, and so which “identity” a cell takes on."],
    "transcriptome": ["Transcriptome", "The full set of genes a cell is actively using at a given moment — a snapshot of its state that AI models can learn to interpret."],
    "tslp": ["TSLP", "A signaling protein released by airway cells that sits near the top of the inflammatory chain behind asthma; blocking it early can dial down several downstream immune pathways at once."],
    "world-model": ["World model", "An AI system that holds an evolving internal simulation of a system's state — like a virtual cell — that can be perturbed and queried repeatedly, rather than answering one question at a time."]
  };

  var isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;
  var activePopover = null;
  var activeLink = null;
  var showTimer = null;

  function idFromHref(href) {
    var i = href.indexOf("#");
    return i === -1 ? null : href.slice(i + 1);
  }

  function closePopover() {
    clearTimeout(showTimer);
    if (activePopover && activePopover.parentNode) {
      activePopover.parentNode.removeChild(activePopover);
    }
    activePopover = null;
    activeLink = null;
  }

  function positionPopover(pop, link) {
    var r = link.getBoundingClientRect();
    var pw = pop.offsetWidth;
    var ph = pop.offsetHeight;
    var left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    var top = r.top - ph - 10;
    var below = false;
    if (top < 8) {
      top = r.bottom + 10;
      below = true;
    }
    pop.style.left = (left + window.scrollX) + "px";
    pop.style.top = (top + window.scrollY) + "px";
    pop.classList.toggle("below", below);
    var arrowLeft = (r.left + r.width / 2 - left);
    arrowLeft = Math.max(14, Math.min(arrowLeft, pw - 14));
    pop.style.setProperty("--arrow-left", arrowLeft + "px");
  }

  function openPopover(link, entry) {
    if (activeLink === link) return;
    closePopover();

    var pop = document.createElement("div");
    pop.className = "glossary-popover";
    pop.setAttribute("role", "tooltip");

    var title = document.createElement("div");
    title.className = "glossary-popover-title";
    title.textContent = entry[0];

    var body = document.createElement("div");
    body.className = "glossary-popover-body";
    body.textContent = entry[1];

    pop.appendChild(title);
    pop.appendChild(body);

    if (isTouch) {
      var more = document.createElement("a");
      more.className = "glossary-popover-more";
      more.href = link.getAttribute("href");
      more.textContent = "Read full entry →";
      pop.appendChild(more);
    }

    document.body.appendChild(pop);
    positionPopover(pop, link);
    activePopover = pop;
    activeLink = link;
  }

  function wireLink(link, entry) {
    link.classList.add("glossary-term-link");
    link.setAttribute("aria-haspopup", "true");

    if (isTouch) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        if (activeLink === link) {
          closePopover();
        } else {
          openPopover(link, entry);
        }
      });
    } else {
      link.addEventListener("mouseenter", function () {
        clearTimeout(showTimer);
        showTimer = setTimeout(function () {
          openPopover(link, entry);
        }, 100);
      });
      link.addEventListener("mouseleave", function () {
        clearTimeout(showTimer);
        closePopover();
      });
      link.addEventListener("focus", function () {
        openPopover(link, entry);
      });
      link.addEventListener("blur", function () {
        closePopover();
      });
    }
  }

  function init() {
    var links = document.querySelectorAll('a[href*="#"]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var id = idFromHref(link.getAttribute("href") || "");
      if (!id || !GLOSSARY[id]) continue;
      wireLink(link, GLOSSARY[id]);
    }

    document.addEventListener("click", function (e) {
      if (activePopover && !activePopover.contains(e.target) && e.target !== activeLink) {
        closePopover();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closePopover();
    });
    window.addEventListener("scroll", closePopover, { passive: true });
    window.addEventListener("resize", closePopover);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
