var FILES = {
        "maze": {
            "file": "maze",
            "title": "Maze Generation",
            "config": {
                "hexagon_size": [30, true],
                "pointer_count": [1, true],
                "leave_breadcrumbs": [true, true],
                "pointer_size": [15, true],
                "background_color": ["color(51)", true],
                "foreground_color": ["color(255)", true],
                "shadow_color": ["color(55)", true]
            }
        },
        "rocket": {
            "file": "rocket",
            "title": "Rocket Visualization",
            "config": {
                "target_count": [25, true],
                "rocket_count": [30, true],
                "background_color": ["color(0)", true],
                "rocket_speed": [1.05, true],
                "rocket_dimensions": [[0, 0, 20, 2], false],
                "hit_radius": [10, true],
                "spark_limit": [15, true],
                "target_class": ["RandomTarget", true]
            }
        },
        "3dpicture": {
            "file": "3dpicture",
            "title": "3D Picture",
            "config": {
                "image_name": ["example.jpg", false],
                "detail": [true, true],
                "image_scale": [5, true],
                //"sort_function": ["function(pixel) {return -brightness(pixel);}", true]
                "sort_function": ["brightness", false]
            }
        }
    };