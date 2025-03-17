<Tooltip
  title=""
  position="bottom"
  trigger="mouseenter" // Changed from "mouseenter click" to "mouseenter"
  interactive={true}
  html={
    <div className="bg-white p-2 rounded-md shadow-sm flex flex-col justify-center border border-gray-200">
      <p>
        {hasSourceUrl ? (
          <Link
            href={citation.source_url}
            target="_blank"
            className="text-blue-500 hover:underline text-sm"
          >
            {citation.source_description}
          </Link>
        ) : (
          citation.source_description || EMPTY_CITATION_MESSAGE
        )}
      </p>
    </div>
  }
>
  <span className="cursor-pointer bg-gray-200 rounded-full px-2 py-1">
    [{number}]
  </span>
</Tooltip>

