# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.18

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Disable VCS-based implicit rules.
% : %,v


# Disable VCS-based implicit rules.
% : RCS/%


# Disable VCS-based implicit rules.
% : RCS/%,v


# Disable VCS-based implicit rules.
% : SCCS/s.%


# Disable VCS-based implicit rules.
% : s.%


.SUFFIXES: .hpux_make_needs_suffix_list


# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/Cellar/cmake/3.18.4/bin/cmake

# The command to remove a file.
RM = /usr/local/Cellar/cmake/3.18.4/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/dzsb-002432/Documents/github/libwebp

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/dzsb-002432/Documents/github/libwebp/webp_js

# Include any dependencies generated for this target.
include CMakeFiles/webpdemux.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/webpdemux.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/webpdemux.dir/flags.make

CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o: CMakeFiles/webpdemux.dir/flags.make
CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o: CMakeFiles/webpdemux.dir/includes_C.rsp
CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o: ../src/demux/anim_decode.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/dzsb-002432/Documents/github/libwebp/webp_js/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o -c /Users/dzsb-002432/Documents/github/libwebp/src/demux/anim_decode.c

CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.i"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/dzsb-002432/Documents/github/libwebp/src/demux/anim_decode.c > CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.i

CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.s"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/dzsb-002432/Documents/github/libwebp/src/demux/anim_decode.c -o CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.s

CMakeFiles/webpdemux.dir/src/demux/demux.c.o: CMakeFiles/webpdemux.dir/flags.make
CMakeFiles/webpdemux.dir/src/demux/demux.c.o: CMakeFiles/webpdemux.dir/includes_C.rsp
CMakeFiles/webpdemux.dir/src/demux/demux.c.o: ../src/demux/demux.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/dzsb-002432/Documents/github/libwebp/webp_js/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object CMakeFiles/webpdemux.dir/src/demux/demux.c.o"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/webpdemux.dir/src/demux/demux.c.o -c /Users/dzsb-002432/Documents/github/libwebp/src/demux/demux.c

CMakeFiles/webpdemux.dir/src/demux/demux.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/webpdemux.dir/src/demux/demux.c.i"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/dzsb-002432/Documents/github/libwebp/src/demux/demux.c > CMakeFiles/webpdemux.dir/src/demux/demux.c.i

CMakeFiles/webpdemux.dir/src/demux/demux.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/webpdemux.dir/src/demux/demux.c.s"
	/Users/dzsb-002432/Documents/emsdk/upstream/emscripten/emcc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/dzsb-002432/Documents/github/libwebp/src/demux/demux.c -o CMakeFiles/webpdemux.dir/src/demux/demux.c.s

# Object files for target webpdemux
webpdemux_OBJECTS = \
"CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o" \
"CMakeFiles/webpdemux.dir/src/demux/demux.c.o"

# External object files for target webpdemux
webpdemux_EXTERNAL_OBJECTS =

libwebpdemux.a: CMakeFiles/webpdemux.dir/src/demux/anim_decode.c.o
libwebpdemux.a: CMakeFiles/webpdemux.dir/src/demux/demux.c.o
libwebpdemux.a: CMakeFiles/webpdemux.dir/build.make
libwebpdemux.a: CMakeFiles/webpdemux.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/dzsb-002432/Documents/github/libwebp/webp_js/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking C static library libwebpdemux.a"
	$(CMAKE_COMMAND) -P CMakeFiles/webpdemux.dir/cmake_clean_target.cmake
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/webpdemux.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/webpdemux.dir/build: libwebpdemux.a

.PHONY : CMakeFiles/webpdemux.dir/build

CMakeFiles/webpdemux.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/webpdemux.dir/cmake_clean.cmake
.PHONY : CMakeFiles/webpdemux.dir/clean

CMakeFiles/webpdemux.dir/depend:
	cd /Users/dzsb-002432/Documents/github/libwebp/webp_js && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/dzsb-002432/Documents/github/libwebp /Users/dzsb-002432/Documents/github/libwebp /Users/dzsb-002432/Documents/github/libwebp/webp_js /Users/dzsb-002432/Documents/github/libwebp/webp_js /Users/dzsb-002432/Documents/github/libwebp/webp_js/CMakeFiles/webpdemux.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/webpdemux.dir/depend

