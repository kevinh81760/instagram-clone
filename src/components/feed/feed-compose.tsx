"use client";

import { useState } from "react";

const composeActions = ["Media", "GIF", "Poll", "Emoji", "Schedule", "Location"];

export function FeedCompose() {
  const [draft, setDraft] = useState("");
  const hasText = draft.trim().length > 0;

  return (
    <section className="border-b border-zinc-200 pb-4">
      <div className="flex gap-3">
        <span
          className="mt-1 block h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-sky-400 via-violet-500 to-fuchsia-500"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <label htmlFor="feed-compose" className="sr-only">
            Write a post
          </label>
          <textarea
            id="feed-compose"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="What's happening?"
            rows={3}
            className="w-full resize-none border-0 bg-transparent py-2 text-xl text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
          />
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-zinc-200 pt-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-sky-600">
              {composeActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  aria-label={`Add ${action}`}
                  className="rounded-full px-2 py-1 font-medium hover:bg-sky-50"
                >
                  {action}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={!hasText}
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
