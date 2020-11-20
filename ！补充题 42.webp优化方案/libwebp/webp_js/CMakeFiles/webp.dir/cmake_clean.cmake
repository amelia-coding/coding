file(REMOVE_RECURSE
  "libwebp.a"
  "libwebp.pdb"
)

# Per-language clean rules from dependency scanning.
foreach(lang C)
  include(CMakeFiles/webp.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
